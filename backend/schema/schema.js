const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// Monoose Models
const Project = require("../models/Project");
const Client = require("../models/Client");

// Project Type
const ProjectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    // Adding Relation Ships
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById({ id: parent.clientId });
      },
    },
    // query{
    //     project(id :"1"){
    //       id
    //       clientId
    //       name
    //       description
    //       client{
    //         id
    //         name
    //         email
    //       }
    //     }
    // }
  }),
});

// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
      // query{
      //     clients{
      //       name
      //     }
      //  }
    },
    client: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Client.findById({ id: args.id });
      },
      // query{
      //     client(id : "1"){
      //       name
      //       email
      //       phone
      //     }
      //  }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(params, args) {
        return Project.find();
      },
      // query{
      //     projects{
      //       id
      //       name
      //       description
      //     }
      // }
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Project.findById({ id: args.id });
      },
      // query{
      //     project(id : "1"){
      //       id
      //       name
      //       description
      //     }
      // }
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        email: {
          type: GraphQLNonNull(GraphQLString),
        },
        phone: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client.save();
      },
      // mutation {
      //   addClient(name: "StarLorD", email: "romeoelites@gmail.com", phone: "+91 987654321") {
      //     id
      //     name
      //     email
      //     phone
      //   }
      // }
    },
    deleteClient: {
      type: ClientType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
      },
      // mutation{
      //   deleteClient(id :"6416b75929ce98c337ec1753"){
      //      name
      //    }
      // }
    },
    addProject: {
      type: ProjectType,
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        description: {
          type: GraphQLNonNull(GraphQLString),
        },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: {
                value: "Not Started",
              },
              progress: {
                value: "In Progress",
              },
              completed: {
                value: "Completed",
              },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });
        return project.save();
      },
      //   mutation{
      //         addProject(name : "Mobile Application" , description : "Make a react native mobile application" , clientId : "6416b79529ce98c337ec1756"){
      //           name
      //           clientId
      //           description
      //         }
      //       }
    },
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndRemove(args.id);
      },
    },
    updateProject : {
        type : ProjectType ,
        args : {
            id : {type : GraphQLNonNull(GraphQLID)},
            name : {type : GraphQLString},
            description : {type : GraphQLString},
            status : {
                type : new GraphQLEnumType({
                    name : "ProjectStatusUpdate",
                    values : {
                        new : {value : "Not Started"} , 
                        progress : {value : "In Progress"} , 
                        completed : {value : "Completed"}
                    }
                })
            },
        },
        resolve(parent , args){
            return Project.findByIdAndUpdate(args.id , 
                {
                    $set : {
                       name : args.name , 
                       description : args.description , 
                       status : args.status
                    }
                },
                {
                    new : true
                }
            )
        }
        // mutation {
        //     updateProject(id :"641731a80fb120dca24a1aa2" , name :"Ecommerce React Native Application" , description : "Make It Clean And Good Code"){
        //       id 
        //       name
        //       description
        //       status
        //     }
        //   } 
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
