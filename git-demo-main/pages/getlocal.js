import React, { useState, useEffect, useCallback, memo } from "react";
import axios from "axios";

    const UserTile = ({ setID, newID }) => {
      const [resources, setResources] = useState([]);

      const fetchResource = useCallback(async () => {
        const response = await axios.get("https://api.randomuser.me/");
        setResources(response.data.results);
      }, []);

      useEffect(() => {
        fetchResource();
      }, [fetchResource]);

      const filteredResources = resources.filter(item => item.login.uuid === newID);

      if (filteredResources.length === 0) {
        return null;
      }

      return (
        <div className="card__item">
          <h2 className="card__title">
            {filteredResources.name.first} {filteredResources.name.last}
          </h2>
          <button className="btn--tile" onClick={() => setID(null)}>
            Back to overview
          </button>
          Details
        </div>
      );
    };

    export default memo(UserTile);