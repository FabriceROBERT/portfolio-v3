
// We import object and document schemas
import pageInfo from './pageInfo'
import skill from './skill'
import social from './social'
import experience from './experience'
import project from './project'
import { createSchema } from 'sanity'
import { SchemaType } from 'sanity'


// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [pageInfo, skill, experience, social, project,];
    
    
    

  
