const createModeration = `
{
    "data": {
        "id": "5edda6a5d9ad0e341e573059",
        "type": "text_ai",
        "attributes": {
            "answer": null,
            "created_at": "2020-06-08T11:47:01.157+09:00",
            "custom_id": null,
            "data": "test",
            "postback": false,
            "postback_method": "GET",
            "postback_url": "https://postback.ap.ngrok.io/api/v1/images/closed_questions",
            "processed_at": null,
            "project_id": 4,
            "status": "unprocessed",
            "template": "text_ai",
            "id": "5edda6a5d9ad0e341e573059",
            "project_name": "Text AI"
        }
    },
    "meta": {
        "code": 201,
        "message": "Created"
    }
}
`;

const getModeration = `
{
  "data": {
    "id": "5ecdd4c3c7828e7272aa93ad",
    "type": "text_check",
    "attributes": {
      "answer": null,
      "created_at": "2020-05-27T11:47:31.059+09:00",
      "custom_id": null,
      "data": "gnoon",
      "language": null,
      "postback": false,
      "postback_method": "GET",
      "postback_url": "https://postback.ap.ngrok.io/api/v1/ai_human",
      "processed_at": null,
      "project_id": 123,
      "status": "unprocessed",
      "template": "text_check",
      "id": "5ecdd4c3c7828e7272aa93ad",
      "project_name": 123
    }
  },
  "meta": {
    "code": 200,
    "message": "OK"
  }
}
`;

module.exports = {
  getModeration,
  createModeration,
};
