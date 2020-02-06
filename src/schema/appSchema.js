/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 17.01.2020
 * Time: 14:56
 * About:
 *
 */
import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

import testSchema from './testSchema';





const Query =  new GraphQLObjectType({
    name:'Query',
    fields:{
        ...testSchema,
    }
});



const appSchema = new GraphQLSchema({
                                        query:Query
                                    });

export default appSchema;