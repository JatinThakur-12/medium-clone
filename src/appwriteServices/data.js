import config from "../configEnv/config";
import { Client, Databases, ID, Query, Storage } from "appwrite";

export class DbService{

    client = new Client();
    databases
    bucket

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.appwriteProjectId); // Your project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, content, featuredImage, status, userId }){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content, 
                    featuredImage, 
                    status, 
                    userId 
                }
            );
        } catch (error) {
            console.log("Appwrite Service -> createPost -> error", error);
        }
    }

    async updatePost(id,{title, content, featuredImage, status, userId}){
        try {

            return await this.databases.updateDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                id,
                {
                    title,
                    content, 
                    featuredImage, 
                    status, 
                    userId 
                }
            )
        } catch (error) {
            console.log("Appwrite Service -> updatePost -> error", error);
        }
    }

    async deletePost(id){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                id
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service -> deletePost -> error", error);
        }
    }

    async getPost(id){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                id
            )
        } catch (error) {
            console.log("Appwrite Service -> getPost -> error", error);
            return false;        
        }
    }

    async getPosts(queries = [Query.equal("status", "active"),Query.orderDesc("$createdAt")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId, 
                config.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service -> getPosts -> error", error);
            return false;
        }
    }


    // FILE UPLOAD SERVICE STARTS HERE
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service -> uploadFile -> error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Service -> deleteFile -> error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service -> getFilePreview -> error", error);
            return false;
        }
    }

}

const dbService = new DbService();

export default dbService;

