class box{
    constructor(x,y){

        this.bo=Bo.rectangle(x,y,10,30,{restitusion:0.2,density:2});
        Wo.add(wo,this.bo);
    }

    display(){
        var Angle=this.bo.angle;
        push();
        var pos=this.bo.position;
        translate(pos.x,pos.y)
        rectMode(CENTER);
        rotate(Angle*180/PI)
     
        rect(0,0,10,30);
        pop();
    }
}