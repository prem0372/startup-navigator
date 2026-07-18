import { Search } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function SearchBar() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 md:flex-row">
      <Input placeholder="Search startup topics, funding, GST, legal..." />

      <Button>
        <div className="flex items-center gap-2">
          <Search size={18} />
          Search
        </div>
      </Button>
    </div>
  );
}

export default SearchBar;