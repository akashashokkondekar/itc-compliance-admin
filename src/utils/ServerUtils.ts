import { ServerEnum } from "./AppConstant";

export class ServerUtils {

  static GetServerURL = (): string => {

    let CurrServerEnv: number = ServerEnum.Prod;
    let urlToReturn:string = "";
    switch (CurrServerEnv) {

      default:
      case ServerEnum.Local:
      case ServerEnum.Dev:
        urlToReturn = "http://localhost:4000/";
        break;
      
      case ServerEnum.Prod:
        urlToReturn = "https://mock-graphql-server.onrender.com/";
        break;
    }
    return urlToReturn;
  }
}