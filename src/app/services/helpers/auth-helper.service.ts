import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthHelper  {
    private authenticationChanged = new Subject<boolean>();
    constructor() {
    }
    
    public isAuthenticated():boolean {
        return (!(window.localStorage['token'] === undefined || 
            window.localStorage['token'] === null ||
            window.localStorage['token'] === 'null' ||
            window.localStorage['token'] === 'undefined' ||
            window.localStorage['token'] === ''));
    }

    public isAuthenticationChanged():any {
        return this.authenticationChanged.asObservable();
    }

    public getToken(): any {
        if( window.localStorage['token'] === undefined || 
            window.localStorage['token'] === null ||
            window.localStorage['token'] === 'null' ||
            window.localStorage['token'] === 'undefined' ||
            window.localStorage['token'] === '') {
            return '';
        }
        let obj = JSON.parse(window.localStorage['token']);
        return obj.token != undefined ? obj.token : '';
    }
    public setToken(data:any):void {
        this.setStorageToken(JSON.stringify(data));
    }
    public getUser() : any {
        if( window.localStorage['token'] === undefined || 
            window.localStorage['token'] === null ||
            window.localStorage['token'] === 'null' ||
            window.localStorage['token'] === 'undefined' ||
            window.localStorage['token'] === '') {
            return '';
        }
        let obj = JSON.parse(window.localStorage['token']);
        return obj.user != undefined ? obj.user : '';
    }
    public failToken():void {
        this.setStorageToken(undefined);
    }
    public logout():void {
        this.setStorageToken(undefined);
    }
    private setStorageToken(value: any):void {
        window.localStorage['token'] = value;
        this.authenticationChanged.next(this.isAuthenticated());
    }
}