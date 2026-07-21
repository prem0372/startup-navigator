import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import Input from "../ui/Input";
import Button from "../ui/Button";

function SearchBar() {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleSearch() {

    if (!search.trim()) {

      alert("Please enter a search topic");

      return;

    }

    navigate(`/explore?search=${encodeURIComponent(search)}`);

  }

  return (

    <div className="mx-auto flex max-w-3xl flex-col gap-4 md:flex-row">

      <Input
        placeholder="Search startup topics, funding, GST, legal..."
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {

          if (e.key === "Enter") {

            handleSearch();

          }

        }}
      />

      <Button onClick={handleSearch}>

        <div className="flex items-center gap-2">

          <Search size={18} />

          Search

        </div>

      </Button>

    </div>

  );

}

export default SearchBar;