<script>
  import { Router, Route } from "svelte-routing";
  import Home from "pages/Home";

  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Home} />
</Router>
