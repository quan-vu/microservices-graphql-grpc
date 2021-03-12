"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const log4js_1 = require("log4js");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const queries_1 = require("./queries");
const playground = __importStar(require("graphql-playground-middleware-express"));
const middleware_1 = require("graphql-voyager/middleware");
const logger = log4js_1.getLogger('index');
logger.level = 'debug';
const PORT = 4000;
const GRAPHQL_PATH = '/graphql';
const PLAYGROUND_PATH = '/playground';
const app = express_1.default();
app.get(`${PLAYGROUND_PATH}`, playground.default({
    endpoint: `${GRAPHQL_PATH}`,
    tabs: queries_1.exampleQueries(GRAPHQL_PATH),
}));
app.use('/voyager', middleware_1.express({ endpointUrl: `${GRAPHQL_PATH}` }));
const server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
server.applyMiddleware({ app, path: `${GRAPHQL_PATH}` });
app.listen({ port: PORT }, () => {
    logger.info(`
    🚀
    Server ready at http://localhost:${PORT}${server.graphqlPath}
    Access playground with query examples at http://localhost:${PORT}${PLAYGROUND_PATH}
    🤘
    `);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLGlFQUFxRDtBQUNyRCxtQ0FBbUM7QUFDbkMscUNBQW9DO0FBQ3BDLDJDQUF3QztBQUN4Qyx1Q0FBMkM7QUFDM0Msa0ZBQW9FO0FBQ3BFLDJEQUEwRTtBQUUxRSxNQUFNLE1BQU0sR0FBRyxrQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBRXZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixNQUFNLFlBQVksR0FBRyxVQUFVLENBQUM7QUFDaEMsTUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDO0FBQ3RDLE1BQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUNMLEdBQUcsZUFBZSxFQUFFLEVBQ3BCLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDakIsUUFBUSxFQUFFLEdBQUcsWUFBWSxFQUFFO0lBQzNCLElBQUksRUFBRSx3QkFBYyxDQUFDLFlBQVksQ0FBQztDQUNuQyxDQUFDLENBQ0gsQ0FBQztBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLG9CQUFpQixDQUFDLEVBQUUsV0FBVyxFQUFFLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFM0UsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQ0FBWSxDQUFDLEVBQUUsUUFBUSxFQUFSLGlCQUFRLEVBQUUsU0FBUyxFQUFULHFCQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXpELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFO0lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQ1Q7O3VDQUVtQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVc7Z0VBQ0EsSUFBSSxHQUFHLGVBQWU7O0tBRWpGLENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=