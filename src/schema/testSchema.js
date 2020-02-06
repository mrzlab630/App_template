/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 20.01.2020
 * Time: 14:48
 * About:
 *
 */

import {GraphQLString,GraphQLObject, GraphQLObjectType} from 'graphql';

const TestType =  new GraphQLObjectType({
    name: 'test',
    fields: () => ({
        action: {type: GraphQLString}
    }),
});



const testSchema = {
    test:{
        type:TestType,
        args:{
            action: {type: GraphQLString}
        },
        resolve(parent,args) {
            return args;
        }
    },
};


export default testSchema;