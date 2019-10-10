const axios = require('axios');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// CV
const CVType = new GraphQLObjectType({
  name: 'Resume',
  fields: () => ({
    basics: { type: BasicsType },
    education: { type: EducationType },
    work: { type: WorkType },
    references: { type: ReferencesType }
  })
});

// Basics Type
const BasicsType = new GraphQLObjectType({
  name: 'Basics',
  fields: () => ({
    name: { type: GraphQLString },
    label: { type: GraphQLString },
    summary: { type: GraphQLString },
    website: { type: GraphQLString },
    email: { type: GraphQLString },
    location: { type: LocationType }
  })
});

// Location Type
const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    city: { type: GraphQLString },
    countryCode: { type: GraphQLInt },
    summary: { type: GraphQLString },
    website: { type: GraphQLString },
    email: { type: GraphQLString },
    location: { type: LocationType }
  })
});

// Education Type
const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: () => ({
    endDate: { type: GraphQLString },
    startDate: { type: GraphQLString },
    area: { type: GraphQLString },
    studyType: { type: GraphQLString },
    instituion: { type: GraphQLString }
  })
});

// Work Type
const WorkType = new GraphQLObjectType({
  name: 'Work',
  fields: () => ({
    summary: { type: GraphQLString },
    website: { type: GraphQLString },
    company: { type: GraphQLString },
    position: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    highlights: { type: GraphQLString }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {}
});
