import styled from "styled-components";
import WriteArticleHeader from "./writeArticle/WriteArticleHeader";
import Editor from "./writeArticle/Editor";
import ArticleSettings from "./writeArticle/ArticleSettings";

const Wrapper = styled.div`
  display: grid;
`;

const WriteArticle = () => {
  return (
    <Wrapper>
      <WriteArticleHeader />
      <Editor></Editor>
      <ArticleSettings></ArticleSettings>
    </Wrapper>
  );
};

export default WriteArticle;
