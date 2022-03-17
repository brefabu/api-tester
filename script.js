const API = () => {
    const APIbody = $("#APIbody").val();
    const APIurl = $("#APIurl").val();
    const APImethod = $("#APImethod").val();

    switch(APImethod) {
        case "GET":
            axios.get(APIurl).then(res => {
                $(".response__body").html(res.data);
            }).catch(err => {
                $(".response__body").html(err);
            })

            break;
        case "POST":
            axios.post(APIurl, JSON.parse(APIbody)).then(res => {
                $(".response__body").html(res.data);
            }).catch(err => {
                $(".response__body").html(err);
            })

            break;
        case "PUT":
            axios.put(APIurl, JSON.parse(APIbody)).then(res => {
                $(".response__body").html(res.data);
            }).catch(err => {
                $(".response__body").html(err);
            })

            break;
        case "DELETE":
            axios.delete(APIurl).then(res => {
                $(".response__body").html(res.data);
            }).catch(err => {
                $(".response__body").html(err);
            })

            break;

    }

    console.log(APImethod, APIurl, APIbody)
}