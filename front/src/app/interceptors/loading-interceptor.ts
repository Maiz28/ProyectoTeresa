import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
    providedIn: "root"
})

//ng g s auth-interceptor
//hace la interaccion con elk back
//va validando  con las peticiones
/**
 * @Description Interceptor para todas las peticiones HTTP
 */
export class LoadingInterceptor implements HttpInterceptor {

    //contaremos las peticiones que llegarán en el interceptor y les daremos salida acada uno de ellos.
    private countrequest =0;
    constructor(private spinner: NgxSpinnerService){}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //this.spinner.show(); //muestra el spinner
        this.countrequest++; //inicia el conteo
        return next.handle(req)
            .pipe(finalize ( () => {
                this.countrequest--; //una vez que finaliza le quitamos el countrequest
                if (!this.countrequest) {
                    this.spinner.hide(); //ocultamos el spinner una vez finalizado
                }
            }))
    }
    
}