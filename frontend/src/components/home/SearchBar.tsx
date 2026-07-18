import Button from "../ui/Button";
import Input from "../ui/Input";

function SearchBar() {
  return (
    <div className="mx-auto flex max-w-3xl gap-3">

      <Input
        placeholder="Search startup topics..."
      />

      <Button>
        Search
      </Button>

    </div>
  );
}

export default SearchBar;