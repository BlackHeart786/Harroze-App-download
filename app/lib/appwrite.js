// File: lib/appwrite.js
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') 
    .setProject('694d274b0012476142af'); 

export const account = new Account(client);