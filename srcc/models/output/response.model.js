// class ResponseModel {
//   statusCode;
//   isSuccess;
//   data;
//   message = "Fetched";

//   constructor(statusCode, isSuccess, data, message = "Fetched") {
//     this.statusCode = statusCode;
//     this.isSuccess = isSuccess;
//     this.data = data;
//     this.message = message;
//   }
//   toJson() {
//     return {
//       statusCode: this.statusCode,
//       isSuccess: this.isSuccess,
//       data: this.data,
//       message: this.message,
//     };
//   }
// }
const ResponseModel = (statusCode, isSuccess, data, message = "Fetched") => {
  return {
    statusCode: statusCode,
    isSuccess: isSuccess,
    data: data,
    message: message,
  };
};
module.exports = ResponseModel;
