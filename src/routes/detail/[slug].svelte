<script>
// @ts-nocheck

  import axios from "axios";

  export async function load({ params }) {
    const { id } = params;

    const response = await axios.get(`https://dev.to/api/articles/${id}`);
    const articleResponse = await response;

    if (!articleResponse) {
      throw new Error("Article is not found");
    }

    return { articleResponse };
  }
</script>
