// This file contains an example of getting
// facebook likes and shares count for specified url
// using .NET 4.5 (C#) and FQL (Facebook Query Language).
//
// If something fails during getting counts
// (for example method has been called with invalid url),
// methods won't throw, they will just return 0.
//
// FQL is a part of official Facebook API. You may look at its overview here: 
// https://developers.facebook.com/docs/technical-guides/fql


using System;
using System.Linq;
using System.Xml.Linq;

namespace GlobalHackathon.Samples
{
    public static class Facebook
    {
        private const string _urlToXmlFromQueryPattern = "https://api.facebook.com/method/fql.query?query={0}";

        public static long GetLikesCount(string url)
        {
            return GetCountByUrlAndColumnName(url, "like_count");
        }

        public static long GetSharesCount(string url)
        {
            return GetCountByUrlAndColumnName(url, "share_count");
        }

        private static long GetCountByUrlAndColumnName(string url, string columnName)
        {
            try
            {
                var sqlQueryText = string.Format("SELECT {0} FROM link_stat WHERE url='{1}'",
                                                 columnName, url);
                var urlToResultXml = string.Format(_urlToXmlFromQueryPattern, sqlQueryText);
                var xmlDocument = XDocument.Load(urlToResultXml);

                var countStr = xmlDocument.Descendants()
                                          .First(node => node.Name.LocalName == columnName)
                                          .Value;
                return long.Parse(countStr);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
