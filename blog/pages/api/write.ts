import { format } from "date-fns";
import { createPost } from "lib/posts";

export default async function handler (req, res) {
    const { id, title, content } = req.body;

    try {
        await createPost({
            id, 
            title, 
            content, 
            date: format(new Date(), "yyyy-MM-dd")
        });
        res.status(200).json({message: 'Create Success'})
    } catch (error) {
        res.status(500).json({error: `Create Failed : ${error}`})
    }
    
}