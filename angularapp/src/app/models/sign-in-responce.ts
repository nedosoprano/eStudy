import { HttpStatusCode } from "@angular/common/http"
import { User } from "./user"

export interface SignInResponce {
    statusCode: HttpStatusCode
    user: User
  }