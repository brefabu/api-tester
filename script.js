const API = () => {
    const APIbody = $("#APIbody").val();
    const APIurl = $("#APIurl").val();
    const APImethod = $("#APImethod").val();

    switch(APImethod) {
        case "GET":
            axios.get(APIurl).then(res => {
                $(".response__body").html(JSON.stringify(res.data, undefined, 2));
            }).catch(err => {
                $(".response__body").html(JSON.stringify(err, undefined, 2));
            })

            break;
        case "POST":
            axios.post(APIurl, JSON.parse(APIbody)).then(res => {
                $(".response__body").html(JSON.stringify(res.data, undefined, 2));
            }).catch(err => {
                $(".response__body").html(JSON.stringify(err, undefined, 2));
            })

            break;
        case "PUT":
            axios.put(APIurl, JSON.parse(APIbody)).then(res => {
                $(".response__body").html(JSON.stringify(res.data, undefined, 2));
            }).catch(err => {
                $(".response__body").html(JSON.stringify(err, undefined, 2));
            })

            break;
        case "DELETE":
            axios.delete(APIurl).then(res => {
                $(".response__body").html(JSON.stringify(res.data, undefined, 2));
            }).catch(err => {
                $(".response__body").html(JSON.stringify(err, undefined, 2));
            })

            break;

    }

    console.log(APImethod, APIurl, APIbody)
}