  const useGroupAndSortTransactions = (transactions, sortOrder) => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (sortOrder.date === "asc") {
        return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
      } else {
        return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
      }
    });

    const grouped = {};

    sortedTransactions.forEach((transaction) => {
      const date = new Date(transaction.dateTime).toLocaleDateString();
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(transaction);
    });

    Object.keys(grouped).forEach((date) => {
      grouped[date] = grouped[date].sort((a, b) => {
        if (sortOrder.time === "asc") {
          return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
        } else {
          return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
        }
      });
    });

    return grouped;
  };


  export default useGroupAndSortTransactions