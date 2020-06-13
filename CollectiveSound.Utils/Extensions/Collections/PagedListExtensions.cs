﻿using CollectiveSound.Utils.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

namespace CollectiveSound.Utils.Extensions.Collections
{
    public static class PagedListExtensions
    {
        public static IPagedList<T> ToPagedList<T>(
            this IEnumerable<T> source,
            int count,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            var pagedList = new PagedList<T>
            {
                TotalCount = count,
                Items = source.ToList()
            };

            return pagedList;
        }
    }
}
