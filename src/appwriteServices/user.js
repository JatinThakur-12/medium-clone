// import config from "../configEnv/config";
// import {Client, Users} from "node-appwrite"

// export class User{

//     client = new Client();
//     users;

//     constructor(){
//         this.users = new Users(this.client);
//         this.client.setEndpoint(config.appwriteUrl)
//                     .setProject(config.appwriteProjectId)
//                     .setKey(config.appwriteUsersKey);
//     }

//     async getUsers(userId){
//         try {
//             if(!userId){
//                 throw new error("please provide user id");
//             }
//             return await this.users.get(userId);

//         } catch (error) {
//             throw error;
//         }
//     }

// }
// const userService = new User();
// export default userService;