$(document).ready(function() {
    $("form#new-package").submit(function(event) {
        event.preventDefault();

        var newPackage = { origin: $("input#origin").val(), 
            destination: $("input#destination").val(),    
            weight: $("input#packWeight").val(), 
            speed: $(".shipType").val(),
            distanceMult: function(){
                var firstNumberOrigin = (this.origin.slice(0,1)) * 1;
                var firstNumberDestination = (this.destination.slice(0,1)) * 1;
                if(firstNumberOrigin == 0){
                    if(firstNumberDestination == 0) return 1;
                    else if(firstNumberDestination < 3) return 1.2;
                    else if(firstNumberDestination < 5) return 1.5;
                    else if(firstNumberDestination < 7) return 2;
                    else return 2.5;
                }
                else if(firstNumberOrigin == 1){
                    if(firstNumberDestination == 1) return 1;
                    else if(firstNumberDestination == 0 || firstNumberDestination == 2 || firstNumberDestination == 4) return 1.2;
                    else if(firstNumberDestination < 7) return 1.5;
                    else if(firstNumberDestination < 9) return 2;
                    else return 2.5;
                }
                else if(firstNumberOrigin == 2){
                    if(firstNumberDestination == 2) return 1;
                    else if(firstNumberDestination < 5) return 1.2;
                    else if(firstNumberDestination < 8) return 1.5;
                    else if(firstNumberDestination < 9) return 2;
                    else return 2.5;
                }
                else if(firstNumberOrigin == 3){
                    if(firstNumberDestination == 3) return 1;
                    else if(firstNumberDestination == 2 || firstNumberDestination == 4 || firstNumberDestination == 6 || firstNumberDestination == 7) return 1.2;
                    else if(firstNumberDestination < 9) return 1.5;
                    else return 2;
                }
                else if(firstNumberOrigin == 4){
                    if(firstNumberDestination == 4) return 1;
                    else if(firstNumberDestination < 7 && firstNumberDestination > 0) return 1.2;
                    else if(firstNumberDestination < 9) return 1.5;
                    else return 2;
                }
                else if(firstNumberOrigin == 5){
                    if(firstNumberDestination == 5) return 1;
                    else if(firstNumberDestination == 4 || firstNumberDestination == 6 || firstNumberDestination == 8) return 1.2;
                    else if(firstNumberDestination > 0) return 1.5;
                    else return 2;
                }
                else if(firstNumberOrigin == 6){
                    if(firstNumberDestination == 6) return 1;
                    else if(firstNumberDestination < 9 && firstNumberDestination > 2) return 1.2;
                    else if(firstNumberDestination > 0) return 1.5;
                    else return 2;
                }
                else if(firstNumberOrigin == 7){
                    if(firstNumberDestination == 7) return 1;
                    else if(firstNumberDestination == 3 || firstNumberDestination == 6 || firstNumberDestination == 8) return 1.2;
                    else if(firstNumberDestination > 1) return 1.5;
                    else if(firstNumberDestination > 0) return 2;
                    else return 2.5;
                }
                else if(firstNumberOrigin == 8){
                    if(firstNumberDestination == 8) return 1;
                    else if(firstNumberDestination > 4) return 1.2;
                    else if(firstNumberDestination > 2) return 1.5;
                    else if(firstNumberDestination > 0) return 2;
                    else return 2.5;
                }
                else if(firstNumberOrigin == 9){
                    if(firstNumberDestination == 9) return 1;
                    else if(firstNumberDestination == 8) return 1.2;
                    else if(firstNumberDestination > 4) return 1.5;
                    else if(firstNumberDestination > 2) return 2;
                    else return 2.5;
                }
                else return 3;
            }, 
            speedMult: function(){
                if(this.speed === "Ground") return 1;
                if(this.speed === "2-day") return 5;
                if(this.speed === "Overnight") return 10;
            },
            cost: function(){
                return 3 + (1.18 * this.distanceMult() * this.weight * this.speedMult());
            }       
        };

        console.log(newPackage.distanceMult());
        $("#shippingCost").empty();
        $("#shippingCost").html("The cost to ship the package will be <b>$" + parseFloat(newPackage.cost()).toFixed(2) + "</b>");
    });
});