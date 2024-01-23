const contentData = [
    {
        title: "My content", 
        content: "Here's some webpage content", 
        children: [
            {
                title: "First child content", 
                content: "Here's some webpage content 2", 
                children: 
                [
                    {
                        title: "First grand child content", 
                        content: "Here's some webpage content 3", 
                        children: []
                    }, 
                    {
                        title: "Second grand child content", 
                        content: "Here's some webpage content 4", 
                        children: []
                    }
                ]
            }, 
            {title: "Second child content", 
            content: "Here's some webpage content 5", 
            children: [
                {
                    title: "Some more grand child content from secnd child", 
                    content: "Here's some webpage content 6", 
                    children: []
                }
            ]}]
    },
    {
        title: "My second content", 
        content: "Here's some webpage content 7", 
        children: [
            {
                title: "First child content", 
                content: "Here's some webpage content 8", 
                children: 
                [
                    {
                        title: "First grand child content", 
                        content: "Here's some webpage content 9", 
                        children: []
                    }, 
                    {
                        title: "Second grand child content", 
                        content: "Here's some webpage content 10", 
                        children: []
                    }
                ]
            }, 
            {title: "Second child content", 
            content: "Here's some webpage content 11", 
            children: [
                {
                    title: "Some more grand child content from secnd child", 
                    content: "Here's some webpage content 12", 
                    children: []
                }
            ]}]
    }
]

const printContent = (contentArray) => {
    contentArray.forEach((contentObject) => {
        console.log(contentObject.content)
        if(contentObject.children.length){
            printContent(contentObject.children)
        } 
    })
}

printContent(contentData)