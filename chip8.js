const memory = new Uint8Array(4096);
const V = new Uint8Array(16);
let pc = 0x200;
let I = 0;
const stack =[];

function fetch(){
    const opcode = (memory[pc] << 8)  | memory[pc + 1];       //memory[pc] is the first byte and <<8 slides the first byte up by 2 hex digits, memory[pc+1 is the secong ]
    pc+=2
    return opcode;
}
const display = new Uint8Array(64*32);


function execute(op){
    const first =(op&0xF000) >> 12;
    const x = (op & 0xF00) >> 8;
    const nn = op &0x00FF;
    const nnn = op & 0x0FFF;

    switch(first){
        case 0x0:
            if(op === 0x00E0) display.fill(0);
            break;
            case 0x1:
                pc=nnn;
                break;
            
            case 0x6:
                v[x] = nn;
                break;
            case 0x7:
                V[x] +=nn;
                break;
            case 0xA:
                I=nnn;
                break;
                default:
                    console.log("uknown opcode", op.toString(16));
                
    }
}