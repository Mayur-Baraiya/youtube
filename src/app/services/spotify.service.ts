import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()

export class SpotifyService{

    private searchUrl:string;

    constructor(private _http:Http) {


    }

    searchMusic(str:string, type='artist') {
        this.searchUrl= 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
        .map(res => res.json());   

    }
    getToken(){

        let headers = new Headers;
        headers.append('Authorization', 'Basic ' + btoa(this.searchUrl.e96adfbbeb844969a8eb4f2d5c1f323d + ':' + this.searchUrl.2f4b45ffef9446ac9bd8f101a641a9c9));
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
       
        let options = new searchMusic({ headers: headers });
       
       
       let params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
       
       
         this.http.post(Spotify.tokenUrl, params.toString(), options).subscribe()
       }

}

