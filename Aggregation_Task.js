// join two or more colection using lookup

/*
{
    $lookup:
    {
        from: < "from collection" >,    
        localField: < any field from "input collection" >,
        foreignField: < any field from "from collection" >,
        as: < attached array field >
    }
}

*/