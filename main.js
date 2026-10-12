
const canvas = document.getElementById("screen");       //assign the html screen to canvas, so more featueres are addable
const ctx = canvas.getContext("2d");    

function render(){          //draws white pixel from display 
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,64,32);
    ctx.fillstyle = "white";
    for(let i=0;i<display.length;i++){
        if(display[i]) 
        ctx.fillRect(i%64,Math.floor(i/64),1,1);
    }

}

display[5*64+10]=1;
render();


const picker = document.getElementById("rom");

picker.addEventListener("change", async () =>{
    console.log("picker fired");
    
    const file =picker.files[0];
    const buffer = await file.arrayBuffer();
    const rom =new Uint8Array(buffer);
    memory.set(rom,0x200);
    console.log("loaded", rom.length, "bytes");
    console.log(memory[0x200], memory[0x201]);
    
    const op = fetch();
    console.log("opcode:", op.toString(16).padStart(4,"0"));
    console.log("pc is now:",pc);
    console.log("first digit:",(op & 0xF000) >>12);

    execute(op);
    for(let k=0;k<3;k++){
        execute(fetch());
    }
    console.log("I:",I,"v0:",V[0],"V1:",V[1]);
    render();
});

