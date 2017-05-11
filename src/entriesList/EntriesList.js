import React from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/UI';
import EntryListing from '../components/EntryListing/EntryListing';
import styles from "./EntriesList.css";

const EntriesList = ({
  entries,
  page,
  heading,
  noEntriesMessage,
  onLoadMore,
  isFetching,
  collections,
  publicFolder,
}) => {
  const entriesContent = (
    <EntryListing
      collections={collections}
      entries={entries}
      publicFolder={publicFolder}
      page={page}
      onPaginate={onLoadMore}
    >
      {heading}
    </EntryListing>
  );

  const fetchingEntriesContent = (<Loader active>
      {['Loading Entries', 'Caching Entries', 'This might take several minutes']}
  </Loader>);
  const noEntriesContent = <div className={styles.noEntries}>No Entries</div>;
  const fallbackContent = isFetching ? fetchingEntriesContent : noEntriesContent;

  return (<div>{entries ? entriesContent : fallbackContent}</div>);
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, { publicFolder: state.config.get('public_folder') }, ...ownProps);
};

export default connect(mapStateToProps)(EntriesList);
