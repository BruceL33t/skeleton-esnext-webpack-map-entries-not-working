export class App {
  myArray2 = [];
  myArray = [
    {
        name: 'R2-D2',
        group: 'robots'
    },
    {
        name: 'terminator',
        group: 'robots'
    },
    {
        name: 'wall-e',
        group: 'robots'
    },
    {
        name: 'robocop',
        group: 'robots'
    },
    {
        name: 'C-3PO',
        group: 'robots'
    },
    {
        name: 'dog',
        group: 'animals'
    },
    {
        name: 'shark',
        group: 'animals'
    },
    {
        name: 'cat',
        group: 'animals'
    },
    {
        name: 'monkey',
        group: 'animals'
    }
  ];
  
  
  
  attached(){
    
  }
  
  clickMe(){
    let self = this;
    for(let i = 0; i < self.myArray.length; i++){
      (function(index) {
        setTimeout(function() { 
          self.myArray2.push(self.myArray[i]); 
          self.myArray2 = [...self.myArray2];
          
        }, i * 1000);
      })(i);
    }
  }
  
}