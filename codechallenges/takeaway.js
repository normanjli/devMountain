const takeaway = (stones) =>{
    const moves = [2,3,5]
    moves.forEach((element,i)=>{
        if(stones>=element){
            moves[i]= stones-element
        }
        else{
            moves.splice(i,moves.length-i)
        }
    })
    console.log(moves)
    if (moves.includes(0)||moves.includes(1)){
        return true
    }else{
        for (let i of moves){
            if (takeaway(i)===false){
                return true
            }
        }
    }
    return false
}
// for(let i=1;i<=10;i++){
    //     console.log(i,takeaway(i))
    // }
const canWin = n => {
    // none of the legal moves are under two
    if (n < 2) {
        return false
    }
    
    let legalMoves = [2, 3, 5]
    
    // if canWin is false for the opponent, then we win
    legalMoves.forEach(move => {
        if (!canWin(n - move)) {
            return true
        }
    })
    
    // if we can't win from above, we lose
    return false
}