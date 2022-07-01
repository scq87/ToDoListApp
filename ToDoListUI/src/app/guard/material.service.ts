import { ElementRef } from "@angular/core";

declare var M :any;

export interface IMaterialInstance{
   open?():void;
   close?():void;
   destroy():void;
}

export class MaterialService{
    static toast(message:string){
        M.toast({html:message});
    }

    
    static initializeFloatingButton(){
       var elems = document.querySelectorAll('.fixed-action-btn');
       M.FloatingActionButton.init(elems); 
    }
    static initializeParallax(){
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems); 
     }
     static initializeSlider(){
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems,{height:375, indicators: false}); 
      
     }
     static initializeTapTarget(){
      var elems = document.querySelectorAll('.tap-target');
      const tapTarget = M.TapTarget.init(elems); 
      var elem = document.querySelectorAll('.menu');
      M.TapTarget.open();
      
      var elem = document.querySelectorAll('.menu');
      const tt = M.init(elem);

      tt.addEventListener('click', function() {
         tapTarget.open()
       })
      }
      static initializeModal(): IMaterialInstance{
         var elems = document.querySelectorAll('.modal');
         return M.Modal.init(elems); 
      }
}