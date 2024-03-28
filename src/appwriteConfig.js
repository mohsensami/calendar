import { Client, Databases, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1';
export const PROJECT_ID = '660584c1849a4862a88b';
export const DATABASE_ID = '660585ed39fcb921ecf5';
export const COLLECTION_ID_MESSAGES = '66058621651289b9c764';

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
