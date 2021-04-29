import { types } from "../Types/types";


//////<<<<<------------------------------------------------``


const blogInitState = 
{
    blogs : [],
    activeBlog : {},
    edit : false
};

const blogReducer = ( state = blogInitState, action  ) =>
{
    switch ( action.type ) 
    {
    
        case types.loadBlogs : return { ...state, blogs : action.payload };

        case types.setActiveBlog : return { ...state, activeBlog : action.payload };

        case types.setEditState : return { ...state, edit : action.payload };

        case types.logout : return { ...state, edit : false };

        default : return state;
            
    };
};


//////---------------------------------------------->>>>>


export { blogReducer };