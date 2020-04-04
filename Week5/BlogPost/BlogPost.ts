'use strict';



export class BlogPost {
  private _author : string;
  private _title : string;
  private _publicationDate: string;
  private _text : string;
 
 


  constructor (author: string, title: string, publicationDate: string, text: string) {
    this._author = author;
    this._title = title;
    this._publicationDate = publicationDate;
    this._text = text;
    
   

  }
}