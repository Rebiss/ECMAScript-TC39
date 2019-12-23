const array = [{
    id:'45464487698',
    name: 'ssdsds',
    cretiona_id: null
    },
    {
        id:'454fdf64487698',
        name: 'ssdsds',
        cretiona_id: null
    },
    {
        id:'4546ff4487698',
        name: 'ssdsds',
        cretiona_id: null
    },
    {
        id:'4546sfgg4487698',
        name: 'ssdsds',
        cretiona_id: '5'
    },
    {
        id:'454644hjj87698',
        name: 'ssdsds',
        cretiona_id: '3'
    }];

    function goo(item){
        if(item.cretiona_id !== null) {
            return item
        }
    }


    const filter = array.filter(goo);

    console.log(filter)