/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

 export class PostIt {
  private _backgroundColor : string;
  private _text : string;
  private _textColor: string;

  constructor(backgroundcolor: string, text: string, textcolor: string){
    this._backgroundColor = backgroundcolor;
    this._text = text;
    this._textColor = textcolor;

  }
}