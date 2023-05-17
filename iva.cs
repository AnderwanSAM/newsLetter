using Azure.Core;
using System;

public class MockResponse : Response
{
    private readonly int _status;

    public MockResponse(int status)
    {
        _status = status;
    }

    public override int Status => _status;

    public override string ReasonPhrase => throw new NotImplementedException();

    public override string ClientRequestId { get; set; }

    public override DateTimeOffset Date => throw new NotImplementedException();

    public override ResponseHeaders Headers => throw new NotImplementedException();

    public override Stream? ContentStream { get; set; }

    public override string ContentType => throw new NotImplementedException();

    public override long? ContentLength => throw new NotImplementedException();

    public override IReadOnlyList<RequestFailedException> ServerErrors => throw new NotImplementedException();

    protected override bool ContainsHeader(string name) => throw new NotImplementedException();

    protected override IEnumerable<HttpHeader> EnumerateHeaders() => throw new NotImplementedException();

    protected override bool TryGetHeaderValue(string name, [NotNullWhen(true)] out string? value) => throw new NotImplementedException();

    protected override bool TryGetHeaderValues(string name, [NotNullWhen(true)] out IEnumerable<string>? values) => throw new NotImplementedException();

    protected override void Dispose(bool disposing) { }
}
