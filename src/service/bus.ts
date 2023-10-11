import mitt from 'mitt';
type Events = {
    ArticleChanged: string;
};
export default mitt<Events>();