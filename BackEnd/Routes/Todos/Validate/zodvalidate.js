const zod = require("zod");

const TodoSchema = zod.object({
    title : zod.string(),
    description :zod.string(),

})

const UpdateSchema = zod.object ({
    title:zod.string(),
    description :zod.string(),
    completed : zod.boolean()
})

module.exports={
    TodoSchema,
    UpdateSchema
}