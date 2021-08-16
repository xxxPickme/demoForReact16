const defaultState = {
    inputValue:"",
    data : [
        "第一, 绝不意气用事",
        '第二，绝对不漏判任何一件坏事',
        '第三，绝对裁判的公正漂亮',
    ]
}

export default (state=defaultState,action)=>{

    if(action.type=="BtnChange"){
        let newState = state
        newState.inputValue = action.value
        console.log("BtnChange",newState.inputValue)
        return newState
    }

    if(action.type=="addItem"){
        let newState = state
        newState.data.push(newState.inputValue)
        console.log("addItem",newState.inputValue)
        return newState
    }

    return state
}