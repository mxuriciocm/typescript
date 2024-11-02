const error = (message: string):never =>{ // datatype never means that the function who has this datatype returns an error 
    throw new Error(message)
}

error('Something went wrong')