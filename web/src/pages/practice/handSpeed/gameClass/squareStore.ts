import { getInterRandom } from "@utils/getInterRandom";
import { Square } from "./squart";
import { single } from "@utils/proxy/single";
import { config } from "./config";

class SquareStore{
    private _store:Square[][] = Array(config.colNumber).fill(0).map(()=>[]);
    add(square:Square){
        this._store[getInterRandom(0, this._store.length)].push(square);
    }
    get():(Square|undefined)[]{
        if(this._store.length === 0)return[];
        return this._store.reduce((pre:(Square|undefined)[], now)=>{
            pre.push(now.shift())
            return pre;
        },[]);
    }
}

export default single(SquareStore);