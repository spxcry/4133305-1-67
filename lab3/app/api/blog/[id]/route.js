export function GET(request, { params }) {
    return Response.json({
        name:"Siriwat",
        major:"IT",
        lv:"3",
        id: params.id
    });
}