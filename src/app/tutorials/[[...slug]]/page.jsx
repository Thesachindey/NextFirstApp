import React from 'react';

const TutorialsPage = async ({params}) => {
    const { slug } = await params;
    const [technology,topic,  ,page_no,subject] = slug || [];
    // console.log('slug', slug);
    return (
        <div>
            this is tutorials page for {technology} {topic} {page_no} {subject}
        </div>
    );
};

export default TutorialsPage;